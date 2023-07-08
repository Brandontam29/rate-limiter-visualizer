import Tooltip from '.';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'auto',
      },
    },
  },
};

export const toolTip = (props: any) => (
  <Tooltip innerHTML="This is a tooltip" {...props} />
);

export const toolTipHTML = (props: any) => (
  <Tooltip
    innerHTML={`
  <h1>
    This is a tooltip with <strong>HTML</strong>
  </h1>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
    voluptatibus. Quisquam, quos voluptatibus.
  </p>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
    voluptatibus. Quisquam, quos voluptatibus. <a href="http://nanoacademic.com" target="_blank">Nanoacademic</a>
  </p>
  `}
    {...props}
  />
);
