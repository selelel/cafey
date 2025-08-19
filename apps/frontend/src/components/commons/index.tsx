import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Typography Components
const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      body: 'text-base',
      small: 'text-sm',
      large: 'text-lg',
      h1: 'text-[40px] md:text-7xl',
      h2: 'text-3xl md:text-[48px]',
      h3: 'text-2xl md:text-[40px]',
      h4: 'text-xl md:text-[32px]',
      h5: 'text-lg md:text-xl',
      h6: 'text-base md:text-lg',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      thin: 'font-thin',
    },
    align: {
      start: 'text-start',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'normal',
    align: 'start',
  },
});

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | 'body'
    | 'small'
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'thin';
  align?: 'start' | 'center' | 'right' | 'justify';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const Text = ({
  as: Component = 'p',
  variant,
  weight,
  align,
  className,
  ...props
}: TextProps) => {
  // If variant is a heading, use that as the default component
  const ComponentToRender = variant?.startsWith('h')
    ? (variant as HeadingLevel)
    : Component;

  return (
    <ComponentToRender
      className={cn(textVariants({ variant, weight, align, className }))}
      {...props}
    />
  );
};

// Layout Components
const mainVariants = cva('p-4 overflow-y-auto', {
  variants: {
    container: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    container: true,
  },
});

export interface MainProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof mainVariants> {
  as?: 'main' | 'div';
}

export const Main = ({
  as: Component = 'main',
  container = true,
  className,
  ...props
}: MainProps) => {
  return (
    <Component
      className={cn(mainVariants({ container, className }))}
      {...props}
    />
  );
};

const sectionVariants = cva(
  'w-full py-20 px-4 md:px-[150px] gap-10 max-w-[1440px]',
  {
    variants: {
      container: {
        true: 'mx-auto',
        false: '',
      },
    },
    defaultVariants: {
      container: true,
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: 'section' | 'div' | 'footer' | 'nav';
}

export const Section = ({
  as: Component = 'section',
  container = true,
  className,
  ...props
}: SectionProps) => {
  return (
    <Component
      className={cn(sectionVariants({ container, className }))}
      {...props}
    />
  );
};

const rowVariants = cva('flex flex-row', {
  variants: {
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    gap: 'md',
    align: 'center',
    justify: 'start',
  },
});

interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {}

export const Row = ({ gap, align, justify, className, ...props }: RowProps) => {
  return (
    <div
      className={cn(rowVariants({ gap, align, justify, className }))}
      {...props}
    />
  );
};

const colVariants = cva('flex flex-col', {
  variants: {
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
  },
  defaultVariants: {
    gap: 'md',
    align: 'start',
  },
});

interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colVariants> {}

export const Col = ({ gap, align, className, ...props }: ColProps) => {
  return (
    <div className={cn(colVariants({ gap, align, className }))} {...props} />
  );
};

// Span is just an alias for Text with span as default
export const Span = (props: Omit<TextProps, 'as'>) => {
  return <Text as='span' {...props} />;
};
