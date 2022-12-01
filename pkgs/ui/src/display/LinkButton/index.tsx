import type { LinkProps } from '../Link';
import { Link } from '../Link';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export interface LinkButtonProps
  extends Pick<LinkProps, 'href' | 'external' | 'children' | 'title'>,
    Pick<ButtonProps, 'variant' | 'fullWidth' | 'color'> {}

export const LinkButton = ({
  children = 'Boop',
  variant = 'text',
  fullWidth,
  color,
  ...props
}: LinkButtonProps) => {
  return (
    <Link {...props}>
      <Button variant={variant} fullWidth={fullWidth} color={color}>
        {children}
      </Button>
    </Link>
  );
};
