function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className,
  target,
  rel,
  ...props
}) {
  const resolvedVariant = variant === 'secondary' ? 'secondary' : 'primary'
  const classes = ['button', `button--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noreferrer noopener' : undefined)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
