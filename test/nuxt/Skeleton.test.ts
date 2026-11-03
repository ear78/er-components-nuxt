import { it, describe, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Skeleton from '~/components/Skeleton.vue';

describe('Skeleton component', () => {
  it('should render default skeleton component with classes', async () => {
    const component = await mountSuspended(Skeleton);
    expect(component.classes()).toStrictEqual([
      'skeleton',
      'w-full',
      'h-6',
      'bg-neutral-200',
      'rounded-lg',
    ]);
  });

  it('should render custom skeleton component with custom classes', async () => {
    const component = await mountSuspended(Skeleton, {
      props: {
        custom: 'hello-test',
      },
    });
    expect(component.classes()).toStrictEqual(['skeleton', 'hello-test']);
  });

  it('should render default bordered skeleton component using named slot', async () => {
    const component = await mountSuspended(Skeleton, {
      slots: {
        'skeleton-bordered': '<div id="skeleton-bordered">Hello test</div>',
      },
    });

    expect(component.find('#skeleton-bordered').exists()).toBe(true);
    expect(component.classes()).toStrictEqual([
      'border',
      'border-neutral-200',
      'bg-neutral-800',
      'rounded-lg',
      'p-3',
    ]);
  });

  it('should render custom bordered skeleton component using named slot', async () => {
    const component = await mountSuspended(Skeleton, {
      props: {
        customBorderBg: 'hello-test',
      },
      slots: {
        'skeleton-bordered': '<div id="skeleton-bordered">Hello test</div>',
      },
    });

    expect(component.find('#skeleton-bordered').exists()).toBe(true);
    expect(component.classes()).toStrictEqual(['hello-test']);
  });
});
