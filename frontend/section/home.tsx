import { Suspense } from 'react';
import Home from './homeComponent';

export default function HomeSection() {
  return (
    <>
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </>
  );
}
