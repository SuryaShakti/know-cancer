import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const Privacy = () => {
  return (
    <div className="text-black text-base font-normal py-1 font-['Poppins']">
      <h1 className='text-2xl font-bold'>Privacy Policy</h1>
      <p className='pt-5'>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.”{" "}
      </p>
      <p className="py-1 font-['Poppins']">
        Section 1.10.31 font-['Poppins'] of “de Finibus Bonorum et Malorum”,
        written by Cicero in 45 BC
      </p>
      <p className="py-1 font-['Poppins']">
        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non.
      </p>{" "}
      <p className="py-1 font-['Poppins']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.”{" "}
      </p>{" "}
      <p className="py-1 font-['Poppins']">
        Section 1.10.31 font-['Poppins'] of “de Finibus Bonorum et Malorum”,
        written by Cicero in 45 BC{" "}
      </p>{" "}
      <p className="py-1 font-['Poppins']"></p>
      “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non.
      <p className="py-1 font-['Poppins']">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.”
      </p>
      <p className="py-1 font-['Poppins']">
        {" "}
        Section 1.10.31 font-['Poppins'] of “de Finibus Bonorum et Malorum”,
        written by Cicero in 45 BC “Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo{" "}
      </p>
      <p className="py-1 font-['Poppins']">
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non.
      </p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <div onClick={() => setOpen(true)} className="w-1/4 mt-5 ml-96">
        <PrimaryButton text={"Edit & Done"} />
      </div>
    </div>
  );
}

export default Privacy