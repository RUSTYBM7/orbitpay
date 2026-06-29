# OrbitPay Credit Union

**Production-grade real-time neo-bank.**

- Flutter mobile (Firebase Auth + Firestore real-time)
- React + Vite admin panel (premium dark purple Fintora UI)
- GitHub Actions CI/CD
- Vercel frontend deploy

## Quick Start (Admin Panel - Working Now)

1. Add GitHub repo secrets for Vercel:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   (Get from Vercel → Project Settings → General)

2. Push to main triggers deploy-admin workflow.

3. Visit your Vercel URL (e.g. orbitpay-xxx.vercel.app)

The admin panel has:
- Beautiful premium dark purple UI
- Funding controls with slider
- Loan approval queue with one-click approve
- Live transaction feed
- Analytics charts
- Ready for real Firebase integration

## Flutter Mobile

```bash
cd flutter_app
flutter pub get
flutter run
```

**Next:** Run `flutterfire configure` to generate firebase_options.dart with your Firebase project.
Add google-services.json (Android) and GoogleService-Info.plist (iOS).

For full production iOS builds, add Apple signing secrets and use fastlane match.

The iOS workflows currently fail on signing (expected until certificates added). Admin deploys cleanly.

Built for launch. First principles engineering.