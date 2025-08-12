import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({ placeholder = "Search", className, value, onChange }: SearchInputProps) {
  return (
    <label className={cn("flex flex-col !h-10", className)}>
      <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
        <div className="text-[#60748a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0">
          <Search size={24} />
        </div>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
          data-testid="input-search"
        />
      </div>
    </label>
  );
}
