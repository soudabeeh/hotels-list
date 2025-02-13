import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('should render 3 loader divs', () => {
    render(<Loader />);

    const loaderDivs = document.querySelectorAll('.animate-wave');
    expect(loaderDivs).toHaveLength(3);
  });
});
