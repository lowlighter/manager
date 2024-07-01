import {
  OsdsButton,
  OsdsIcon,
  OsdsMenu,
  OsdsMenuItem,
  OsdsText,
} from '@ovhcloud/ods-components/react';
import {
  ODS_BUTTON_SIZE,
  ODS_BUTTON_VARIANT,
  ODS_ICON_NAME,
  ODS_ICON_SIZE,
  ODS_TEXT_LEVEL,
} from '@ovhcloud/ods-components';
import {
  ODS_THEME_COLOR_INTENT,
  ODS_THEME_TYPOGRAPHY_SIZE,
} from '@ovhcloud/ods-common-theming';
import { useTranslation } from 'react-i18next';
import { useHref } from 'react-router-dom';
import { TVolume } from '@/api/data/volume';

type ActionsProps = {
  volume: TVolume;
  projectUrl: string;
};
export default function ActionsComponent({
  volume,
  projectUrl,
}: Readonly<ActionsProps>) {
  const { t } = useTranslation();
  const hrefEdit = useHref(`./${volume.id}/edit`);
  const hrefAttach = useHref(`./attach/${volume.id}`);
  const hrefDetach = useHref(`./detach/${volume.id}`);
  const hrefRemove = useHref(`./delete/${volume.id}`);
  const hrefCreateBackup = `${projectUrl}/storages/volume-backup/create?volume=${volume.id}`;

  return (
    <OsdsMenu>
      <OsdsButton
        slot={'menu-title'}
        circle
        color={ODS_THEME_COLOR_INTENT.primary}
        variant={ODS_BUTTON_VARIANT.stroked}
      >
        <OsdsIcon
          name={ODS_ICON_NAME.ELLIPSIS}
          color={ODS_THEME_COLOR_INTENT.primary}
          size={ODS_ICON_SIZE.xxs}
        ></OsdsIcon>
      </OsdsButton>
      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          data-testid={'actionComponent-edit-button'}
          href={hrefEdit}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_storages_blocks_edit_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>

      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          href={volume.attachedTo?.length ? hrefDetach : hrefAttach}
          data-testid="actionComponent-attach-detach-button"
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t(
              `pci_projects_project_storages_blocks_instance_${
                volume.attachedTo?.length ? 'detach' : 'attach'
              }_label`,
            )}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>

      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          data-testid={'actionComponent-create-backup-button'}
          href={hrefCreateBackup}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_storages_blocks_create_backup_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>

      <OsdsMenuItem>
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
          color={ODS_THEME_COLOR_INTENT.primary}
          data-testid={'actionComponent-remove-button'}
          href={hrefRemove}
        >
          <OsdsText
            size={ODS_THEME_TYPOGRAPHY_SIZE._500}
            level={ODS_TEXT_LEVEL.button}
            color={ODS_THEME_COLOR_INTENT.primary}
            slot={'start'}
          >
            {t('pci_projects_project_storages_blocks_delete_label')}
          </OsdsText>
        </OsdsButton>
      </OsdsMenuItem>
    </OsdsMenu>
  );
}
