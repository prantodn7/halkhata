'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function normalizePath(path) {
  if (!path) return '/';
  const [pathname] = path.split(/[?#]/);
  if (!pathname) return '/';
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function Link({ to, href, children, ...props }) {
  const target = href ?? to ?? '/';
  return (
    <NextLink href={target} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to, href, className, children, ...props }) {
  const pathname = usePathname();
  const target = href ?? to ?? '/';
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(target);
  const isActive = currentPath === targetPath;
  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className;

  return (
    <NextLink href={target} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();

  return (target, options = {}) => {
    if (options.replace) {
      router.replace(target);
      return;
    }
    router.push(target);
  };
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname };
}

export function Outlet() {
  return null;
}

export function createBrowserRouter(routes) {
  return routes;
}

export function RouterProvider() {
  return null;
}
