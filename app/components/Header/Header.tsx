'use client';

import { toggleLanguageSwitcher, useDispatch } from 'lib/redux';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import styled from 'styled-components';
import Item from './Item';
import { ActiveLanguage, LanguageSwitcher } from './LanguageSwitcher';

const Header = () => {
  const dispatch = useDispatch();
  const locale = useLocale();

  return (
    <StyledHeader>
      <Item>
        <Link href={`/${locale}/`}>
          <svg
            width='60'
            height='48'
            viewBox='0 0 60 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.3876 16L0 48H18.0861L29.6411 27.957H30.3589L41.9139 48H60L38.6124 16L21.3876 16Z'
              style={{
                fill: 'var(--primary-color)',
              }}
            />
            <path
              d='M60 16.7477V2.71607e-06L7.06895e-07 0L0 16.7477L60 16.7477Z'
              style={{
                fill: 'var(--primary-color)',
              }}
            />
          </svg>
        </Link>
      </Item>
      <Item>
        <Link href={`/${locale}/projects/react`}>
          <svg
            width='66'
            height='60'
            viewBox='0 0 66 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M66 29.8697C66 25.4975 60.5247 21.354 52.1301 18.7845C54.0673 10.2285 53.2063 3.42129 49.4126 1.24191C48.5381 0.730703 47.5157 0.48855 46.3991 0.48855V3.48855C47.0179 3.48855 47.5157 3.60963 47.9327 3.83833C49.7623 4.88765 50.5561 8.88317 49.9372 14.0222C49.7892 15.2868 49.5471 16.6186 49.2511 17.9773C46.6143 17.3316 43.7354 16.8338 40.7085 16.511C38.8924 14.0222 37.009 11.7621 35.1121 9.78452C39.4978 5.70828 43.6144 3.4751 46.4126 3.4751V0.475098C42.713 0.475098 37.87 3.11187 32.9731 7.68586C28.0762 3.13878 23.2332 0.52891 19.5336 0.52891V3.52891C22.3184 3.52891 26.4484 5.74864 30.8341 9.79797C28.9507 11.7755 27.0673 14.0222 25.278 16.511C22.2377 16.8338 19.3587 17.3316 16.722 17.9908C16.4126 16.6455 16.1839 15.3406 16.0224 14.0894C15.3901 8.95043 16.1704 4.95492 17.9865 3.89214C18.3901 3.64999 18.9148 3.54236 19.5336 3.54236V0.542362C18.4036 0.542362 17.3812 0.784515 16.4933 1.29573C12.713 3.4751 11.8655 10.2688 13.8161 18.798C5.44843 21.3809 0 25.511 0 29.8697C0 34.2419 5.47534 38.3854 13.87 40.9549C11.9327 49.511 12.7937 56.3181 16.5874 58.4975C17.4619 59.0087 18.4843 59.2509 19.6144 59.2509C23.3139 59.2509 28.157 56.6141 33.0538 52.0401C37.9507 56.5872 42.7937 59.1971 46.4933 59.1971C47.6233 59.1971 48.6457 58.9549 49.5336 58.4437C53.3139 56.2643 54.1614 49.4706 52.2108 40.9415C60.5516 38.372 66 34.2285 66 29.8697ZM48.4843 20.8966C47.9865 22.632 47.3677 24.4213 46.6682 26.2105C46.1166 25.1343 45.5381 24.0581 44.9058 22.9818C44.287 21.9056 43.6278 20.8563 42.9686 19.8338C44.8789 20.1164 46.722 20.4661 48.4843 20.8966ZM42.3229 35.224C41.2735 37.0401 40.1973 38.7621 39.0807 40.363C37.0762 40.5379 35.0448 40.632 33 40.632C30.9686 40.632 28.9372 40.5379 26.9462 40.3764C25.8296 38.7756 24.7399 37.067 23.6906 35.2643C22.6682 33.502 21.7399 31.7128 20.8924 29.9101C21.7265 28.1074 22.6682 26.3047 23.6771 24.5424C24.7265 22.7262 25.8027 21.0042 26.9193 19.4033C28.9238 19.2285 30.9552 19.1343 33 19.1343C35.0314 19.1343 37.0628 19.2285 39.0538 19.3899C40.1704 20.9908 41.2601 22.6993 42.3094 24.502C43.3318 26.2643 44.2601 28.0536 45.1076 29.8563C44.2601 31.659 43.3318 33.4616 42.3229 35.224ZM46.6682 33.4751C47.3946 35.2778 48.0135 37.0805 48.5247 38.8294C46.7623 39.2599 44.9058 39.6231 42.9821 39.9056C43.6413 38.8697 44.3005 37.8069 44.9193 36.7173C45.5381 35.641 46.1166 34.5513 46.6682 33.4751ZM33.0269 47.8294C31.7758 46.5379 30.5247 45.0984 29.287 43.5244C30.4978 43.5782 31.7354 43.6186 32.9865 43.6186C34.2511 43.6186 35.5022 43.5917 36.7265 43.5244C35.5157 45.0984 34.2646 46.5379 33.0269 47.8294ZM23.0179 39.9056C21.1076 39.6231 19.2646 39.2733 17.5022 38.8428C18 37.1074 18.6188 35.3181 19.3184 33.5289C19.87 34.6051 20.4484 35.6814 21.0807 36.7576C21.713 37.8338 22.3587 38.8832 23.0179 39.9056ZM32.9596 11.9101C34.2108 13.2016 35.4619 14.641 36.6996 16.215C35.4888 16.1612 34.2511 16.1208 33 16.1208C31.7354 16.1208 30.4843 16.1477 29.2601 16.215C30.4709 14.641 31.722 13.2016 32.9596 11.9101ZM23.0045 19.8338C22.3453 20.8697 21.6861 21.9325 21.0673 23.0222C20.4484 24.0984 19.87 25.1747 19.3184 26.2509C18.5919 24.4482 17.9731 22.6455 17.4619 20.8966C19.2242 20.4796 21.0807 20.1164 23.0045 19.8338ZM10.8296 36.6769C6.06727 34.6455 2.98655 31.9818 2.98655 29.8697C2.98655 27.7576 6.06727 25.0805 10.8296 23.0625C11.9866 22.5648 13.2511 22.1208 14.5561 21.7038C15.3229 24.3406 16.3318 27.085 17.583 29.8966C16.3453 32.6948 15.3498 35.4258 14.5964 38.0491C13.2646 37.632 12 37.1747 10.8296 36.6769ZM18.0673 55.9011C16.2377 54.8518 15.4439 50.8563 16.0628 45.7173C16.2108 44.4527 16.4529 43.1208 16.7489 41.7621C19.3857 42.4078 22.2646 42.9056 25.2915 43.2285C27.1076 45.7173 28.991 47.9773 30.8879 49.9549C26.5022 54.0312 22.3857 56.2643 19.5874 56.2643C18.9821 56.2509 18.4709 56.1298 18.0673 55.9011ZM49.9776 45.65C50.6099 50.789 49.8296 54.7845 48.0135 55.8473C47.6099 56.0895 47.0852 56.1971 46.4664 56.1971C43.6816 56.1971 39.5516 53.9773 35.1659 49.928C37.0493 47.9504 38.9327 45.7038 40.722 43.215C43.7623 42.8921 46.6413 42.3944 49.278 41.7352C49.5874 43.0939 49.8296 44.3989 49.9776 45.65ZM55.157 36.6769C54 37.1747 52.7354 37.6186 51.4305 38.0356C50.6637 35.3989 49.6547 32.6545 48.4036 29.8428C49.6413 27.0446 50.6368 24.3137 51.3901 21.6903C52.722 22.1074 53.9865 22.5648 55.1704 23.0625C59.9327 25.0939 63.0135 27.7576 63.0135 29.8697C63 31.9818 59.9193 34.659 55.157 36.6769Z'
              style={{
                fill: 'var(--primary-color)',
              }}
            />
            <path
              d='M32.9866 36.0176C36.382 36.0176 39.1346 33.2651 39.1346 29.8697C39.1346 26.4742 36.382 23.7217 32.9866 23.7217C29.5912 23.7217 26.8386 26.4742 26.8386 29.8697C26.8386 33.2651 29.5912 36.0176 32.9866 36.0176Z'
              style={{
                fill: 'var(--primary-color)',
              }}
            />
          </svg>
        </Link>
      </Item>
      <Item>
        <Link href={`/${locale}/projects/reactnative`}>
          <svg
            width='48'
            height='73'
            viewBox='0 0 48 73'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='1.5'
              y='1.5'
              width='45'
              height='69.5854'
              rx='3.76829'
              style={{
                stroke: 'var(--primary-color)',
              }}
              strokeWidth='3'
              strokeLinejoin='round'
            />
            <rect
              x='20.4878'
              y='57.9512'
              width='6.43902'
              height='6.43902'
              rx='3.21951'
              style={{
                fill: 'var(--primary-color)',
              }}
            />
            <path
              d='M38.2158 31.9051C38.2158 30.0327 35.871 28.2583 32.276 27.1579C33.1056 23.4938 32.7369 20.5786 31.1122 19.6453C30.7377 19.4264 30.2999 19.3227 29.8217 19.3227V20.6074C30.0867 20.6074 30.2999 20.6593 30.4785 20.7572C31.262 21.2066 31.6019 22.9177 31.3369 25.1184C31.2735 25.66 31.1698 26.2303 31.0431 26.8122C29.9139 26.5357 28.681 26.3225 27.3847 26.1843C26.607 25.1184 25.8004 24.1505 24.9881 23.3037C26.8662 21.558 28.6291 20.6016 29.8275 20.6016V19.3169C28.2431 19.3169 26.1691 20.4461 24.072 22.4049C21.9749 20.4576 19.9009 19.3399 18.3166 19.3399V20.6247C19.5091 20.6247 21.2778 21.5753 23.156 23.3094C22.3494 24.1563 21.5429 25.1184 20.7766 26.1843C19.4746 26.3225 18.2417 26.5357 17.1125 26.818C16.98 26.2419 16.882 25.683 16.8129 25.1472C16.5421 22.9465 16.8763 21.2354 17.654 20.7802C17.8269 20.6765 18.0516 20.6305 18.3166 20.6305V19.3457C17.8326 19.3457 17.3948 19.4494 17.0145 19.6683C15.3956 20.6016 15.0327 23.5111 15.8681 27.1637C12.2846 28.2698 9.95129 30.0385 9.95129 31.9051C9.95129 33.7775 12.2961 35.552 15.8911 36.6524C15.0615 40.3165 15.4302 43.2317 17.0549 44.165C17.4293 44.3839 17.8672 44.4876 18.3511 44.4876C19.9355 44.4876 22.0095 43.3584 24.1066 41.3996C26.2037 43.3469 28.2777 44.4646 29.862 44.4646C30.346 44.4646 30.7838 44.3609 31.1641 44.142C32.783 43.2086 33.1459 40.2992 32.3106 36.6466C35.8825 35.5462 38.2158 33.7718 38.2158 31.9051ZM30.7147 28.0624C30.5015 28.8056 30.2365 29.5718 29.9369 30.3381C29.7007 29.8772 29.453 29.4163 29.1822 28.9554C28.9172 28.4945 28.6349 28.0451 28.3526 27.6073C29.1707 27.7283 29.96 27.8781 30.7147 28.0624ZM28.0761 34.1981C27.6267 34.9759 27.1658 35.7133 26.6876 36.3989C25.8292 36.4738 24.9593 36.5141 24.0835 36.5141C23.2136 36.5141 22.3437 36.4738 21.491 36.4046C21.0128 35.7191 20.5462 34.9874 20.0968 34.2154C19.6589 33.4607 19.2614 32.6944 18.8985 31.9224C19.2557 31.1504 19.6589 30.3784 20.091 29.6237C20.5404 28.8459 21.0013 28.1085 21.4795 27.4229C22.3379 27.348 23.2078 27.3077 24.0835 27.3077C24.9535 27.3077 25.8234 27.348 26.6761 27.4172C27.1543 28.1027 27.6209 28.8344 28.0703 29.6064C28.5082 30.3611 28.9057 31.1274 29.2686 31.8994C28.9057 32.6714 28.5082 33.4434 28.0761 34.1981ZM29.9369 33.4491C30.248 34.2211 30.5131 34.9931 30.732 35.7421C29.9773 35.9265 29.1822 36.082 28.3584 36.203C28.6407 35.7594 28.923 35.3043 29.188 34.8376C29.453 34.3767 29.7007 33.91 29.9369 33.4491ZM24.0951 39.5964C23.5593 39.0433 23.0235 38.4268 22.4935 37.7528C23.012 37.7758 23.542 37.7931 24.0778 37.7931C24.6193 37.7931 25.1551 37.7816 25.6794 37.7528C25.1609 38.4268 24.6251 39.0433 24.0951 39.5964ZM19.8087 36.203C18.9906 36.082 18.2013 35.9322 17.4466 35.7479C17.6598 35.0047 17.9248 34.2384 18.2244 33.4722C18.4606 33.9331 18.7083 34.394 18.9791 34.8549C19.2499 35.3158 19.5264 35.7652 19.8087 36.203ZM24.0663 24.2139C24.6021 24.767 25.1378 25.3834 25.6679 26.0575C25.1494 26.0345 24.6193 26.0172 24.0835 26.0172C23.542 26.0172 23.0062 26.0287 22.4819 26.0575C23.0004 25.3834 23.5362 24.767 24.0663 24.2139ZM19.803 27.6073C19.5207 28.0509 19.2384 28.506 18.9734 28.9727C18.7083 29.4336 18.4606 29.8945 18.2244 30.3554C17.9133 29.5834 17.6483 28.8114 17.4293 28.0624C18.1841 27.8838 18.9791 27.7283 19.803 27.6073ZM14.5891 34.8203C12.5496 33.9504 11.2303 32.8096 11.2303 31.9051C11.2303 31.0006 12.5496 29.8541 14.5891 28.99C15.0845 28.7768 15.6261 28.5867 16.1849 28.4081C16.5133 29.5373 16.9454 30.7126 17.4812 31.9167C16.9512 33.115 16.5248 34.2845 16.2022 35.408C15.6318 35.2294 15.0903 35.0335 14.5891 34.8203ZM17.6886 43.0531C16.9051 42.6037 16.5652 40.8926 16.8302 38.6918C16.8936 38.1503 16.9973 37.5799 17.124 36.998C18.2532 37.2746 19.4861 37.4878 20.7824 37.626C21.5601 38.6918 22.3667 39.6597 23.179 40.5066C21.3009 42.2523 19.5379 43.2086 18.3396 43.2086C18.0804 43.2029 17.8614 43.151 17.6886 43.0531ZM31.3542 38.663C31.625 40.8638 31.2908 42.5749 30.5131 43.03C30.3402 43.1337 30.1155 43.1798 29.8505 43.1798C28.6579 43.1798 26.8893 42.2292 25.0111 40.4951C25.8177 39.6482 26.6242 38.6861 27.3905 37.6203C28.6925 37.482 29.9254 37.2688 31.0546 36.9865C31.1871 37.5684 31.2908 38.1272 31.3542 38.663ZM33.5723 34.8203C33.0768 35.0335 32.5352 35.2236 31.9764 35.4022C31.648 34.273 31.2159 33.0977 30.6801 31.8936C31.2102 30.6953 31.6365 29.5258 31.9591 28.4023C32.5295 28.5809 33.071 28.7768 33.578 28.99C35.6175 29.8599 36.9368 31.0006 36.9368 31.9051C36.931 32.8096 35.6117 33.9561 33.5723 34.8203Z'
              style={{
                fill: 'var(--primary-color)',
                stroke: 'var(--primary-color)',
              }}
              strokeWidth='0.3'
            />
            <path
              d='M24.0778 34.5382C25.5319 34.5382 26.7107 33.3594 26.7107 31.9053C26.7107 30.4512 25.5319 29.2725 24.0778 29.2725C22.6237 29.2725 21.4449 30.4512 21.4449 31.9053C21.4449 33.3594 22.6237 34.5382 24.0778 34.5382Z'
              style={{
                fill: 'var(--primary-color)',
                stroke: 'var(--primary-color)',
              }}
              strokeWidth='0.3'
            />
          </svg>
        </Link>
      </Item>
      {/* <Item>
        <svg width="49" height="65" viewBox="0 0 49 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.7723 64.3296H8.72908C5.89696 64.3296 3.29687 62.9509 1.94396 60.7323C0.771003 58.8085 0.687228 56.5616 1.71473 54.566L5.31452 47.5752C12.594 33.4384 16.3464 18.4196 16.4689 2.93766L16.4852 1H33.0697V2.31946C33.0697 18.213 36.8907 33.619 44.4265 48.1061L47.7746 54.5423C48.813 56.5389 48.7369 58.7906 47.5654 60.7207C46.2145 62.947 43.6111 64.33 40.7727 64.33L40.7723 64.3296ZM19.0998 3.63929C18.871 19.2964 15.0243 34.4831 7.66114 48.784L4.06135 55.7748C3.45596 56.9497 3.5043 58.2226 4.19726 59.3588C5.07448 60.7978 6.8107 61.6913 8.72876 61.6913H40.7719C42.6943 61.6913 44.433 60.7945 45.3092 59.3516C46.0012 58.2121 46.0447 56.9362 45.4327 55.76L42.0846 49.3238C34.5606 34.8575 30.645 19.4944 30.4387 3.64003L19.0998 3.63929Z"
            style={{
              fill: "var(--primary-color)",
              stroke: "var(--primary-color)",
            }}
            strokeWidth="0.5"
          />
          <path
            d="M38.9039 3.63917H10.5986C9.86978 3.63917 9.27917 3.04862 9.27917 2.31971C9.27917 1.59085 9.86972 1.00024 10.5986 1.00024H38.9039C39.6328 1.00024 40.2234 1.59079 40.2234 2.31971C40.2234 3.04808 39.6324 3.63917 38.9039 3.63917Z"
            style={{
              fill: "var(--primary-color)",
              stroke: "var(--primary-color)",
            }}
            strokeWidth="0.5"
          />
          <path
            d="M16.7549 47.1413C12.5001 47.1413 8.30156 45.2739 8.00336 45.1384C7.33959 44.8374 7.04671 44.0569 7.34677 43.3931C7.64778 42.7293 8.42928 42.4365 9.09257 42.7346C9.19451 42.781 19.4401 47.3274 22.2835 41.6148C26.1196 33.9027 37.7581 35.6184 38.2518 35.6963C38.9716 35.8083 39.4635 36.4821 39.352 37.2019C39.2405 37.9207 38.572 38.4174 37.847 38.304C37.745 38.2892 27.621 36.808 24.6462 42.7895C22.9742 46.1524 19.8491 47.1407 16.7547 47.1412L16.7549 47.1413Z"
            style={{
              fill: "var(--primary-color)",
              stroke: "var(--primary-color)",
            }}
            strokeWidth="0.5"
          />
        </svg>
      </Item> */}
      <Item
        $borderLeft
        $last
        $chevronDown
        onClick={() => {
          dispatch(toggleLanguageSwitcher());
        }}
      >
        <ActiveLanguage />
      </Item>
      <LanguageSwitcher />
    </StyledHeader>
  );
};

export { Header };

export const StyledHeader = styled.header`
  display: flex;
  height: 137px;
  border-bottom: 2px solid var(--primary-color);
`;
