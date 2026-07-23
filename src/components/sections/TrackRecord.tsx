import { Container } from "@/components/ui/Container";
import { Statistic } from "@/types";

interface TrackRecordProps {
  stats: Statistic[];
}

export function TrackRecord({ stats }: TrackRecordProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-lg font-medium text-slate-600">
            The Numbers Behind <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center px-4 md:px-8 ${
                index !== stats.length - 1 ? 'md:border-r border-slate-200' : ''
              }`}
            >
              <div className="bg-[#eef5ff] text-blue-600 font-bold text-2xl md:text-3xl px-8 py-3 rounded-full mb-6 inline-block">
                {stat.value}
              </div>
              <p className="text-sm md:text-base font-medium text-slate-900 max-w-[280px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
