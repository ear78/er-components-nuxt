<!-- import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from '@/components/DashboardCard/DashboardCard.module.scss';
import logo from '@/assets/img/er-logo.svg';

interface DashboardCardProps {
  component: {
    id: number;
    component: string;
    description: string;
    settings: {};
  };
  editSettings: (id: number) => void;
  isDarkMode: boolean;
}

export default function DashboardCard({
  component,
  editSettings,
  isDarkMode,
}: Readonly<DashboardCardProps>) {
  const truncate = (str: any, maxLength = 30) => {
    const truncated =
      str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
    return truncated;
  };

  const isButtonEnabled = (component: any) => {
    return Object?.keys(component.settings)?.length > 1;
  };

  return (
    <div
      key={component.id}
      className={`${styles.Card} h-auto ${isDarkMode ? styles.Dark : ''}`}
    >
      <p className={styles.Header}>
        <img src={logo.src} alt='logo' className="w-5" />
        {component.component}
      </p>
      <p className={styles.Description}>
        {component.description}
        {Object.keys(component.settings).length > 1 ? (
          Object.entries(component.settings).map(([key, value]: any) => (
            <span key={key} className={styles.SettingsPill}>
              <b>{`${key}:`}</b>
              &nbsp;
              {typeof value === 'boolean' && value
                ? 'True'
                : typeof value === 'boolean' && !value
                  ? 'False'
                  : truncate(value)}
            </span>
          ))
        ) : (
          <span className={styles.SettingsPill}>Default Settings</span>
        )}
      </p>
      <p className={styles.Footer}>
        <span className={styles.Circle} />
        {component.component}
        &nbsp; settings
        <button
          type='button'
          disabled={!isButtonEnabled(component)}
          aria-label={`Edit settings for ${component.component}`}
          onClick={() => editSettings(component.id)}
          className={`${styles.EditBtn} ${!isButtonEnabled(component) ? 'disabled:opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <FontAwesomeIcon icon={faEdit} fontSize='inherit' /> edit
        </button>
      </p>
    </div>
  );
} -->

<template>
  <div key="{component.id}" :class="`Card h-auto ${isDarkMode ? 'Dark' : ''}`">
    <p class="Header">
      <img :src="logo" alt="logo" className="w-5" />
      {{ component.component }}
    </p>
    <p class="Description">
      {{ component.description }}
      <template v-if="Object.keys(component.settings).length > 1">
        <template v-for="(value, key) in component.settings" :key="key">
          <span class="SettingsPill">
            <b>{{ `${key}:` }}</b>
            &nbsp;
            <template v-if="typeof value === 'boolean' && value">
              True
            </template>
            <template v-else-if="typeof value === 'boolean' && !value">
              False
            </template>
            <template v-else>
              {{ truncate(value) }}
            </template>
          </span>
        </template>
      </template>
      <span v-else class="SettingsPill">Default Settings</span>
    </p>
    <p class="Footer">
      <span class="Circle" />
      {{ component.component }}
      &nbsp; settings
      <button
        type="button"
        :disabled="!isButtonEnabled"
        :aria-label="`Edit settings for ${component.component}`"
        @click="$emit('editSettings', component.id)"
        :class="`EditBtn w-9 h-8 ${!isButtonEnabled ? 'disabled:opacity-50 cursor-not-allowed' : 'cursor-pointer'}`"
      >
        <FontAwesomeIcon :icon="faEdit" width-auto class="w-3 h-3" />
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/img/er-logo.svg';

const emit = defineEmits(['editSettings']);
const props = defineProps<{
  component: {
    id: number;
    component: string;
    description: string;
    settings: {};
  };
  isDarkMode: boolean;
}>();

const isButtonEnabled = computed(() => {
  return Object?.keys(props.component.settings)?.length > 1;
});

const truncate = (str: any, maxLength = 30) => {
  const truncated =
    str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
  return truncated;
};
</script>

<style scoped>
.Dark {
  &.Card {
    background: var(--gray-800);
    border: 1px solid transparent;

    .Header {
      img {
        filter: invert(1);
      }
    }

    .SettingsPill {
      background: var(--gray-700);
    }
  }
}

.Card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: var(--border);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  .Header {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 0;

    img {
      width: 20px;
      margin-right: 8px;
    }
  }

  .Description {
    margin: 0.5rem 0 1rem;
    font-size: 0.9rem;
  }

  .SettingsPill {
    display: inline-flex;
    flex-wrap: wrap;
    background: var(--gray-200);
    border-radius: 15px;
    padding: 1px 10px;
    margin: 0 5px 0 0;
    font-weight: 500;
    white-space: pre;
    margin-bottom: 4px;
    overflow-x: clip;
  }

  .Footer {
    display: flex;
    align-items: center;
    margin: auto 0 0 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--gray-500);

    .Circle {
      margin-right: 10px;
      height: 13px;
      width: 13px;
      display: inline-block;
      background: color-mix(in srgb, var(--secondary-color) 50%, white);
      border: 1px solid color-mix(in srgb, var(--secondary-color) 90%, white);
      border-radius: 50%;
    }

    .EditBtn {
      text-transform: capitalize;
      font-size: 0.75rem;
      margin-left: auto;
      background: black;
      color: white;
      border: 1px solid black;
      padding: 0 0 2px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: color-mix(in oklab, black 70%, white);
      }
    }
  }
}
</style>
