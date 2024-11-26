import { ShellContext } from '@ovh-ux/manager-react-shell-client';
import { useContext, useEffect } from 'react';

export default function HidePreloader(): any {
  const { ux } = useContext(ShellContext).shell;

  useEffect(() => {
    ux.hidePreloader();
  }, []);

  return null;
}
