import { Suspense } from 'react';
import SignUpWithToast from './signupComponent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading sign-up...</div>}>
      <SignUpWithToast />
    </Suspense>
  );
}
