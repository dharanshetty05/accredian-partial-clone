import { domainsData } from "@/lib/data/domains";

export function DomainExpertise() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="text-lg text-gray-600">
            <span className="text-blue-600 font-medium">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {domainsData.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.3333%-1rem)] bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 p-6 md:p-8 flex flex-col items-center justify-center transition-all hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] min-h-[140px]"
              >
                <div className="text-blue-600 mb-3">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 text-center">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
