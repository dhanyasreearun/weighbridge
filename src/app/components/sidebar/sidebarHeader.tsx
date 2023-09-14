export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-center bg-white py-6">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-black text-lg font-medium text-white">
          W
        </div>
        <div className="font-medium">Weighbridge</div>
      </div>
    </div>
  );
}
