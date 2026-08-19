# Firebase media setup

The portfolio keeps its existing `public/projects/*` assets and adds Firebase as a dynamic media layer.

## 1. Create the Firebase services

1. Create a Firebase project and register a Web app.
2. Enable **Authentication → Email/Password**.
3. Create one administrator account manually in **Authentication → Users**. The portfolio does not expose account registration.
4. Create a **Cloud Firestore** database.
5. Create a **Cloud Storage** bucket.

Cloud Storage may require the Firebase Blaze billing plan. Set a budget alert before uploading large videos.

## 2. Configure the local app

Copy `.env.example` to `.env.local` and paste the Web app configuration values:

```bash
cp .env.example .env.local
```

Restart `npm run dev` after changing environment variables.

## 3. Deploy security rules

Install/login to the Firebase CLI, associate this directory with the Firebase project, then deploy both rulesets:

```bash
firebase login
firebase use --add
firebase deploy --only firestore:rules,storage
```

The included rules allow public reads and authenticated writes. Because registration is not exposed, only accounts created in the Firebase Console can upload or delete media.

For stricter production access, replace `request.auth != null` in both rules files with a specific UID allowlist or a custom `admin` claim.

## 4. Upload media

Open `/admin/media`, sign in with the administrator account, select a project, and upload an image or video.

- Images: maximum 15 MB in the admin UI
- Videos: maximum 200 MB
- Firestore collection: `projectMedia`
- Storage prefix: `projects/{projectSlug}/`

Project detail pages subscribe to Firestore and update automatically. If Firebase is unavailable or unconfigured, static project images continue to render normally.
