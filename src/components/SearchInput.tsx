
import { search } from '../../public/assets';

import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image src={search} alt="Search icon" className="h-6 w-6 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="p-2 pl-10 rounded-3xl bg-background-normal text-texts-normal focus-visible:outline-none"
      />
    </div>
  );
};

export default SearchInput;