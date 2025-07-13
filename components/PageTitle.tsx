import { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageTitle = ({ title, subtitle, children }: PageTitleProps) => {
  return (
    <section className="py-16 bg-indigo-50 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Hibsons Digital Staffing
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;