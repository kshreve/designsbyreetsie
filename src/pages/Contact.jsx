import { EmailForm } from '../components/EmailForm';

export const Contact = () => {
  return (
    <div className="w-full flex flex-wrap gap-0 md:gap-[4%]">
      <div className="w-full md:w-[48%] box-border">
        <div className="text-title font-sans text-xl mb-2">Galleries</div>
        <p className="mb-2">
          Reetsie's designs are on display and available for purchase at various art galleries in
          the Pacific Northwest and California. Please contact Reetsie for more information.
        </p>
        <hr className="my-6 border-0 border-t border-[#E1E1E1]" />
        <p className="text-title font-sans text-xl mb-2">Gourds for Sale</p>
        <p className="mb-2">
          If you are interested in purchasing gourd art directly or would like to inquire about
          commissioned pieces, please contact Reetsie directly.
        </p>
        <hr className="my-6 border-0 border-t border-[#E1E1E1]" />
        <p className="text-title font-sans text-xl mb-2">Purchasing Gourds</p>
        <p className="mb-2">
          Reetsie accepts PayPal when purchasing her gourds. Once you've agreed to a purchase price
          and shipping costs, you may go to this link, enter her email address (
          <a className="text-link" href="mailto:TWNMEADOW@aol.com">
            twnmeadow@aol.com
          </a>
          ), and follow the directions.
        </p>
        <hr className="my-6 border-0 border-t border-[#E1E1E1]" />
      </div>
      <div className="w-full md:w-[48%] box-border">
        <p className="mb-2">
          Reetsie welcomes inquiries regarding gourds for sale, commissioned artwork, and questions
          regarding her work.
        </p>
        <EmailForm />
      </div>
    </div>
  );
};
