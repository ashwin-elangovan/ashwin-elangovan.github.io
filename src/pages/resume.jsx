import { useEffect } from 'react';

export default function MyDocument() {
  useEffect(() => {
    window.location.href = 'https://ashwin-docs.s3.amazonaws.com/ashwin-elangovan-resume.pdf';
  }, []);

  return null;
}
