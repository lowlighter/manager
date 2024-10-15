import { waitFor, screen, fireEvent } from '@testing-library/react';
import { render } from '../../../utils/test.provider';
import { BaseLayout } from './base.component';
import { listingTemplateProps } from './base.stories';

describe('BaseLayout component', () => {
  it('renders base component correctly', async () => {
    render(<BaseLayout {...listingTemplateProps} />);
    waitFor(() => {
      expect(screen.getByText('Vrack Services')).toBeInTheDocument();
      expect(
        screen.getByText(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ),
      ).toBeInTheDocument();
    });
  });

  it('clicks on back link triggers return fn', async () => {
    const backLinkLabel = 'back link';
    const spy = jest.fn();

    render(
      <BaseLayout
        {...listingTemplateProps}
        backLinkLabel={backLinkLabel}
        onClickReturn={spy}
      />,
    );

    fireEvent.click(screen.getByText(backLinkLabel));

    await waitFor(() => expect(spy).toHaveBeenCalled());
  });
});
