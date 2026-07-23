/**
 * A simple utility to merge class names conditionally.
 * In a real project with Tailwind, you would typically use `clsx` and `tailwind-merge`.
 * Since we are avoiding unnecessary package installations, this simple version filters out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
