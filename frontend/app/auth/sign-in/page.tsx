import { Suspense } from 'react';
import SignInWithToast from './SignInWithToast';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading sign-in...</div>}>
      <SignInWithToast />
    </Suspense>
  );
}
