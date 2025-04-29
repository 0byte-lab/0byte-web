import Spline from '@splinetool/react-spline';

export default function SplineArchitecture() {
  return (
    <div className="relative h-[90vh] max-w-5xl mx-auto mb-12 overflow-x-hidden">

      {/* Spline model above the grid */}
      <Spline
        className="z-10"
        scene="https://prod.spline.design/VeYA5k2r2m-HME-8/scene.splinecode"
      />

    </div>
  );
}