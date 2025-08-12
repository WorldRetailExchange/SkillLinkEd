import { ChevronDown } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  checked?: boolean;
}

interface FilterGroup {
  title: string;
  description?: string;
  options?: FilterOption[];
  isOpen?: boolean;
}

interface FilterSidebarProps {
  filterGroups: FilterGroup[];
  onFilterChange?: (groupIndex: number, optionId: string, checked: boolean) => void;
}

export default function FilterSidebar({ filterGroups, onFilterChange }: FilterSidebarProps) {
  return (
    <div className="layout-content-container flex flex-col w-80">
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Filter
      </h2>
      <div className="flex flex-col p-4 gap-3">
        {filterGroups.map((group, groupIndex) => (
          <details
            key={groupIndex}
            className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group"
            open={group.isOpen}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">{group.title}</p>
              <div className="text-[#111418] group-open:rotate-180 transition-transform">
                <ChevronDown size={20} />
              </div>
            </summary>
            {group.description && (
              <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">{group.description}</p>
            )}
            {group.options && (
              <div className="pb-2 space-y-1">
                {group.options.map((option) => (
                  <label key={option.id} className="flex items-center gap-2 py-1 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded text-[#0d78f2] border-gray-300 focus:ring-[#0d78f2]"
                      checked={option.checked || false}
                      onChange={(e) => onFilterChange?.(groupIndex, option.id, e.target.checked)}
                      data-testid={`checkbox-${option.id}`}
                    />
                    <span className="text-[#60748a] text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}
