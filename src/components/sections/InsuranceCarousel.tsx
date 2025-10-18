export function InsuranceCarousel() {
  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center">
          We Accept a Range of Insurances
        </h2>
        <div className="mt-12 flex justify-center">
          <img
            src="/media/insurance-carriers-accepted.png"
            alt="List of accepted insurance carriers including Aetna, Cigna, BlueCross BlueShield, UnitedHealthcare, Anthem, CareFirst, and Medicaid"
            className="max-w-4xl w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}