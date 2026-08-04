import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
    test: {
        projects: [
            {
                test: {
                    name: 'unit',
                    environment: 'jsdom',
                    include: ['test/unit/**/*.test.ts'],
                },
            },
            {
                test: {
                    name: 'browser',
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        headless: true,
                        instances: [{ browser: 'chromium' }],
                    },
                    include: ['test/browser/**/*.test.ts'],
                },
            },
        ],
    },
})
