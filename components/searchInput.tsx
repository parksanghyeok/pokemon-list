import { useState } from "react";
import { useRouter } from "next/router";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="relative flex items-center w-full mt-[15px] mb-[10px]">
        <input
          type='number'
          value={ search }
          placeholder="검색할 포켓몬의 번호를 입력해주세요."
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => {
            if (!search) return false;
            if (e.keyCode === 13) {
              router.push(`/detail/${search}`);
            }
          }}
          className={`w-full py-2 px-4 border border-gray3 rounded-md bg-gray3`}
        />
        <button
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800"
          onClick={() => {
            if (!search) return false;
            router.push(`/detail/${search}`);
          }}
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
      </div>
    </>
  )
};

export default SearchInput;