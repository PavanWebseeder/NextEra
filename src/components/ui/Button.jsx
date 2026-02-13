export default function Button({text,variant='primary',type='button'})
{
    const base = 'rounded-full font-medium transition text-xs px-3 py-1.5 md:text-sm md:px-5 md:py-2.5';

    const styles = {
        primary:'bg-blue-600 text-white hover:bg-blue-700',
        outline:'border border-blue-400 text-blue-500 hover:text-white hover:bg-blue-700'
    };
    
    return(
        <button type={type} className={`${base} ${styles[variant]} `}>
            {text}
        </button>
    );
}