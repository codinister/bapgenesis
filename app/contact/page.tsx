import Customerservice from '@/components/Customerservice';
import Pageheader from '@/components/Pageheader';

export default function Contact() {
  return (
    <>
      <Pageheader
        title="Get in touch"
        subtitle="Want to get in touch? We'd love to hear from you."
      />

      <section className="contact">
        <div>
          <div></div>
          <div></div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </section>


      <Customerservice />
    </>
  );
}
