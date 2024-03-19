

export default function ListBody( { children } ) {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {children}
        </ul>
    );
}