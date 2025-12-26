import { Monitor } from 'lucide-react';
import { SelectDemo } from '../Bulid Ui/select';
import { ExampleCombobox } from '../ui/combobox';

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto mt-5 rounded-lg bg-white/5 text-white">
        <div className='p-4 gap-1 flex justify-between'>
          <div className='flex gap-2 w-30 p-2 rounded-sm hover:bg-white/20 cursor-pointer transition-all duration-300'>
            <Monitor />Mornitor
          </div>
          <div>
            <ExampleCombobox/>
          </div>
        </div>
    </div>
  )
}

export default Navbar