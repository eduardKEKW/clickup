export const ToggleBtn = () => {
    return (
    <label className="relative flex justify-between items-center group em:p-2">
        <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none em:rounded-md" />
        <span className="
            em:w-16 em:h-10 flex items-center flex-shrink-0 em:ml-4 em:p-1 bg-gray-300 rounded-full 
            duration-300 ease-in-out peer-checked:bg-green-400 after:em:w-8 after:em:h-8 
            after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:em:translate-x-6 group-hover:after:em:translate-x-1">
        </span>
    </label>    
    )
}