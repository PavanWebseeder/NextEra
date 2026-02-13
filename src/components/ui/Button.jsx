export default function Button({text,variant='primary',type='button'})
{
    const base = 'px-6 py-3 rounded-full font-medium transition'

    const styles = {
        primary:'bg-blue-600 text-white hover:bg-blue-700',
        outline:'border border-blue-400 text-blue-500 hover:text-white hover:bg-blue-700'
    };
    
    return(
        <button type={type} className={`${base} ${styles[variant]}`}>
            {text}
        </button>
    );
}