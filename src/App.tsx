/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import CanvasContainer from './components/CanvasContainer';
import Overlay from './components/Overlay';
import ResumePDF from './components/ResumePDF';

export default function App() {
  return (
    <>
      <main className="relative w-full h-screen bg-[#050505]">
        {/* Suspense is needed for R3F Canvas items (like Environment) */}
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white">Loading 3D Environment...</div>}>
          <CanvasContainer />
        </Suspense>
        <Overlay />
      </main>
      
      {/* This component is completely hidden except when printing */}
      <ResumePDF />
    </>
  );
}
