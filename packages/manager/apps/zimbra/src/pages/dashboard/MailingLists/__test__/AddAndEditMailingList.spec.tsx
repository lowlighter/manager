import React from 'react';
import 'element-internals-polyfill';
import '@testing-library/jest-dom';
import { vi, describe, expect } from 'vitest';
import { useSearchParams } from 'react-router-dom';
import { render, waitFor, fireEvent, act } from '@/utils/test.provider';
import { mailingListsMock } from '@/api/_mock_';
import AddAndEditMailingList from '../AddAndEditMailingList.page';
import mailingListsAddAndEditTranslation from '@/public/translations/mailinglists/addAndEdit/Messages_fr_FR.json';
import { navigate } from '@/utils/test.setup';

describe('mailing lists add and edit page', async () => {
  const editMailingListId = mailingListsMock[0].id;

  it('should be in add mode if no editMailingListId param', async () => {
    const { getByTestId, queryByTestId } = render(<AddAndEditMailingList />);

    await waitFor(() => {
      expect(queryByTestId('spinner')).toBeNull();
    });

    expect(getByTestId('page-title')).toHaveTextContent(
      mailingListsAddAndEditTranslation.zimbra_mailinglist_add_title,
    );
  });

  it('should be add page and enable/disable button based on form validity', async () => {
    const { getByTestId, queryByTestId } = render(<AddAndEditMailingList />);

    await waitFor(() => {
      expect(queryByTestId('spinner')).toBeNull();
    });

    const button = getByTestId('confirm-btn');
    const inputAccount = getByTestId('input-account');
    const selectDomain = getByTestId('select-domain');
    const inputOwner = getByTestId('input-owner');
    const replyToList = getByTestId('list');
    const selectLanguage = getByTestId('select-language');
    const moderationOption = getByTestId('all');

    expect(button).toBeDisabled();

    await act(() => {
      inputAccount.odsInputBlur.emit({ name: 'account', value: '' });
      inputOwner.odsInputBlur.emit({ name: 'owner', value: '' });
    });

    expect(inputAccount).toHaveAttribute('color', 'error');
    expect(inputOwner).toHaveAttribute('color', 'error');
    expect(button).not.toBeEnabled();

    await act(() => {
      inputAccount.odsValueChange.emit({ name: 'account', value: 'account' });
      selectDomain.odsValueChange.emit({ name: 'domain', value: 'domain' });
      inputOwner.odsValueChange.emit({
        name: 'owner',
        value: 'testowner',
      });
      selectLanguage.odsValueChange.emit({ name: 'language', value: 'FR' });
      fireEvent.click(replyToList);
      fireEvent.click(moderationOption);
    });

    expect(inputAccount).toHaveAttribute('color', 'default');
    expect(inputOwner).toHaveAttribute('color', 'default');
    expect(button).toBeEnabled();

    await act(() => {
      inputOwner.odsValueChange.emit({
        name: 'owner',
        value: 't',
      });
    });
    expect(button).not.toBeEnabled();
  });

  it('should be in edit mode if editMailingListId param is present', async () => {
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams({
        editMailingListId,
      }),
      vi.fn(),
    ]);

    const { getByTestId, queryByTestId } = render(<AddAndEditMailingList />);

    await waitFor(() => {
      expect(queryByTestId('spinner')).toBeNull();
    });

    expect(getByTestId('page-title')).toHaveTextContent(
      mailingListsAddAndEditTranslation.zimbra_mailinglist_edit_title,
    );
  });

  it('should go back when back button pressed', async () => {
    const { getByTestId, queryByTestId } = render(<AddAndEditMailingList />);

    await waitFor(() => {
      expect(queryByTestId('spinner')).toBeNull();
    });

    act(() => {
      fireEvent.click(getByTestId('back-btn'));
    });

    expect(navigate).toHaveBeenCalledOnce();
  });
});
