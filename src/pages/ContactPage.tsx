import { useSeo } from '@/hooks/useSeo';
import { buildLocalBusinessSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactSection } from '@/components/ContactSection';
import { Hero } from '@/components/Hero';
import { business } from '@/data/business';

export function ContactPage() {
  useSeo({
    title: `Contact TMS Electric | Electrician ${business.city}, CA | ${business.phoneDisplay}`,
    description: `Contact TMS Electric in ${business.city}, CA. Call ${business.phoneDisplay} for electrical service, panel upgrades, EV chargers, and emergency repairs in North County San Diego.`,
    canonical: '/contact',
    schema: buildLocalBusinessSchema(),
  });

  return (
    <>
      <Hero
        title="Contact TMS Electric"
        subtitle={`Call us at ${business.phoneDisplay} for fast, reliable electrical service in ${business.city} and all of North County San Diego. Licensed, insured, and ready to help.`}
        backgroundImage="https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        backgroundAlt="Electrician in safety gear checking electrical panels"
        location={business.city}
      />

      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact' }]} />
        </div>
      </div>

      <ContactSection />
    </>
  );
}
