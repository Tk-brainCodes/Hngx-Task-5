/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        basewhite: 'var(--basewhite)',
        'errorerror-100': 'var(--errorerror-100)',
        'errorerror-200': 'var(--errorerror-200)',
        'errorerror-300': 'var(--errorerror-300)',
        'errorerror-400': 'var(--errorerror-400)',
        'errorerror-50': 'var(--errorerror-50)',
        'errorerror-600': 'var(--errorerror-600)',
        'errorerror-700': 'var(--errorerror-700)',
        'errorerror-800': 'var(--errorerror-800)',
        'errorerror-900': 'var(--errorerror-900)',
        errormain: 'var(--errormain)',
        'footer-color': 'var(--footer-color)',
        grey: 'var(--grey)',
        'pastel-bg': 'var(--pastel-bg)',
        primarymain: 'var(--primarymain)',
        'primaryprimary-100': 'var(--primaryprimary-100)',
        'primaryprimary-200': 'var(--primaryprimary-200)',
        'primaryprimary-300': 'var(--primaryprimary-300)',
        'primaryprimary-400': 'var(--primaryprimary-400)',
        'primaryprimary-50': 'var(--primaryprimary-50)',
        'primaryprimary-600': 'var(--primaryprimary-600)',
        'primaryprimary-700': 'var(--primaryprimary-700)',
        'primaryprimary-800': 'var(--primaryprimary-800)',
        'primaryprimary-900': 'var(--primaryprimary-900)',
        secondarymain: 'var(--secondarymain)',
        'secondarysecondary-100': 'var(--secondarysecondary-100)',
        'secondarysecondary-200': 'var(--secondarysecondary-200)',
        'secondarysecondary-300': 'var(--secondarysecondary-300)',
        'secondarysecondary-400': 'var(--secondarysecondary-400)',
        'secondarysecondary-50': 'var(--secondarysecondary-50)',
        'secondarysecondary-600': 'var(--secondarysecondary-600)',
        'secondarysecondary-700': 'var(--secondarysecondary-700)',
        'secondarysecondary-800': 'var(--secondarysecondary-800)',
        'secondarysecondary-900': 'var(--secondarysecondary-900)',
        successmain: 'var(--successmain)',
        'successsuccess-100': 'var(--successsuccess-100)',
        'successsuccess-200': 'var(--successsuccess-200)',
        'successsuccess-300': 'var(--successsuccess-300)',
        'successsuccess-400': 'var(--successsuccess-400)',
        'successsuccess-50': 'var(--successsuccess-50)',
        'successsuccess-600': 'var(--successsuccess-600)',
        'successsuccess-700': 'var(--successsuccess-700)',
        'successsuccess-800': 'var(--successsuccess-800)',
        'successsuccess-900': 'var(--successsuccess-900)',
        text: 'var(--text)'
      },
      fontFamily: {
        'footer-style': 'var(--footer-style-font-family)',
        'typography-body-b1': 'var(--typography-body-b1-font-family)',
        'typography-body-b2': 'var(--typography-body-b2-font-family)',
        'typography-body-b3': 'var(--typography-body-b3-font-family)',
        'typography-body-b4': 'var(--typography-body-b4-font-family)',
        'typography-button-b0': 'var(--typography-button-b0-font-family)',
        'typography-button-b1': 'var(--typography-button-b1-font-family)',
        'typography-button-b2': 'var(--typography-button-b2-font-family)',
        'typography-button-b3': 'var(--typography-button-b3-font-family)',
        'typography-button-b4': 'var(--typography-button-b4-font-family)',
        'typography-header-h1': 'var(--typography-header-h1-font-family)',
        'typography-header-h2': 'var(--typography-header-h2-font-family)',
        'typography-header-h3': 'var(--typography-header-h3-font-family)',
        'typography-header-h4': 'var(--typography-header-h4-font-family)',
        'typography-header-h5': 'var(--typography-header-h5-font-family)',
        'typography-header-h6': 'var(--typography-header-h6-font-family)',
        'typography-subheader-sh1':
          'var(--typography-subheader-sh1-font-family)',
        'typography-subheader-sh2':
          'var(--typography-subheader-sh2-font-family)',
        'typography-subheader-sh3':
          'var(--typography-subheader-sh3-font-family)',
        'typography-subtitle-s1': 'var(--typography-subtitle-s1-font-family)',
        'typography-subtitle-s2': 'var(--typography-subtitle-s2-font-family)',
        'typography-subtitle-s3': 'var(--typography-subtitle-s3-font-family)'
      },
      boxShadow: {
        shadow: 'var(--shadow)'
      }
    }
  },
  plugins: []
}
