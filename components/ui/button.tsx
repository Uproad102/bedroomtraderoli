export function Button({ children, className }: any) {
  return <button className={`bg-blue-600 hover:bg-blue-700 rounded-xl ${className}`}>{children}</button>;
}
