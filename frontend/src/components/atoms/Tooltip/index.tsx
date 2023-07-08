import Icon from '../Icon';

export type TooltipProps = {
  innerHTML: string;
};

const Tooltip = ({ innerHTML }: TooltipProps) => {
  return (
    <div className="group relative inline-block">
      <Icon name={'InformationCircleIcon'} size="size-4" />
      <div
        className="absolute -left-1/2 top-0 z-10 mt-6 hidden w-48 space-y-2 rounded bg-background-level-3 p-2 text-sm text-text-body group-hover:block"
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    </div>
  );
};

export default Tooltip;
