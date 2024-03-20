
import React from 'react';
import { LinkCrewH3 } from 'common';
import Link from 'next/link';

export default function Add_button() {
  return (
      <div className="card bg-primary hover:cursor-pointer mx-auto w-1/5">
        <Link href="./contact">
        <div className="card-body text-center p-4 md:p-6 lg:p-8 xl:p-10">
          <LinkCrewH3 title="contact" className="card-title mx-auto" />
        </div>
        </Link>
      </div>
  );
}