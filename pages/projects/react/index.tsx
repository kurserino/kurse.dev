import type { NextPage } from "next";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../src/components/Button";
import CheckOutLink from "../../../src/components/CheckOutLink";
import DotsStripe from "../../../src/components/DotsStripe";
import Flex from "../../../src/components/Flex";
import Header from "../../../src/components/Header/Header";
import Main from "../../../src/components/Main";
import MainTitle from "../../../src/components/MainTitle";
import Project from "../../../src/components/Projects/Project";
import ProjectDescription from "../../../src/components/Projects/ProjectDescription";
import SelfServiceTotemSvg from "../../../src/components/Projects/SelfServiceTotemSvg";
import TelemedicineCabinSvg from "../../../src/components/Projects/TelemedicineCabinSvg";
import ScrollDown from "../../../src/components/ScrollDown";
import Section from "../../../src/components/Section";
import Text from "../../../src/components/Text";
import Title from "../../../src/components/Title";
import { useAppDispatch } from "../../../src/hooks";
import { useHorizontalScroll } from "../../../src/hooks/useHorizontalScroll";

export async function getStaticProps({ locale }: { locale: string }) {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["react"])),
    },
  };
}

const ReactProjects: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const dispatch = useAppDispatch();
  const scrollRef = useHorizontalScroll();
  const { t } = useTranslation();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     router.replace(router.asPath, undefined, {
  //       scroll: false,
  //     });
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div>
      <Head>
        <title>Kurse.dev</title>
        <meta name="description" content="Kurse is a full stack developer and designer" />
      </Head>
      <Header />
      <Main ref={scrollRef}>
        <Section width="1100px" paddingRight="270px">
          <Flex column justifyCenter fullHeight>
            <Flex>
              <MainTitle>React</MainTitle>
            </Flex>
            <Text style={{ marginBottom: 47, maxWidth: locale === "en" ? 400 : 440 }}>{t("react:description")}</Text>
            <svg width="250" height="94" viewBox="0 0 250 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M66 47.3946C66 43.0224 60.5247 38.8789 52.1301 36.3094C54.0673 27.7534 53.2063 20.9462 49.4126 18.7668C48.5381 18.2556 47.5157 18.0135 46.3991 18.0135V21.0135C47.0179 21.0135 47.5157 21.1345 47.9327 21.3632C49.7623 22.4126 50.5561 26.4081 49.9372 31.5471C49.7892 32.8117 49.5471 34.1435 49.2511 35.5022C46.6143 34.8565 43.7354 34.3587 40.7085 34.0359C38.8924 31.5471 37.009 29.287 35.1121 27.3094C39.4978 23.2332 43.6144 21 46.4126 21V18C42.713 18 37.87 20.6368 32.9731 25.2108C28.0762 20.6637 23.2332 18.0538 19.5336 18.0538V21.0538C22.3184 21.0538 26.4484 23.2735 30.8341 27.3229C28.9507 29.3004 27.0673 31.5471 25.278 34.0359C22.2377 34.3587 19.3587 34.8565 16.722 35.5157C16.4126 34.1704 16.1839 32.8655 16.0224 31.6144C15.3901 26.4753 16.1704 22.4798 17.9865 21.417C18.3901 21.1749 18.9148 21.0673 19.5336 21.0673V18.0673C18.4036 18.0673 17.3812 18.3094 16.4933 18.8206C12.713 21 11.8655 27.7937 13.8161 36.3229C5.44843 38.9058 0 43.0359 0 47.3946C0 51.7668 5.47534 55.9103 13.87 58.4798C11.9327 67.0359 12.7937 73.8431 16.5874 76.0224C17.4619 76.5336 18.4843 76.7758 19.6144 76.7758C23.3139 76.7758 28.157 74.139 33.0538 69.565C37.9507 74.1121 42.7937 76.722 46.4933 76.722C47.6233 76.722 48.6457 76.4798 49.5336 75.9686C53.3139 73.7892 54.1614 66.9955 52.2108 58.4664C60.5516 55.8969 66 51.7534 66 47.3946ZM48.4843 38.4215C47.9865 40.157 47.3677 41.9462 46.6682 43.7354C46.1166 42.6592 45.5381 41.583 44.9058 40.5067C44.287 39.4305 43.6278 38.3812 42.9686 37.3587C44.8789 37.6413 46.722 37.991 48.4843 38.4215ZM42.3229 52.7489C41.2735 54.565 40.1973 56.287 39.0807 57.8879C37.0762 58.0628 35.0448 58.157 33 58.157C30.9686 58.157 28.9372 58.0628 26.9462 57.9013C25.8296 56.3005 24.7399 54.5919 23.6906 52.7892C22.6682 51.0269 21.7399 49.2377 20.8924 47.435C21.7265 45.6323 22.6682 43.8296 23.6771 42.0673C24.7265 40.2511 25.8027 38.5292 26.9193 36.9283C28.9238 36.7534 30.9552 36.6592 33 36.6592C35.0314 36.6592 37.0628 36.7534 39.0538 36.9148C40.1704 38.5157 41.2601 40.2242 42.3094 42.0269C43.3318 43.7892 44.2601 45.5785 45.1076 47.3812C44.2601 49.1839 43.3318 50.9865 42.3229 52.7489ZM46.6682 51C47.3946 52.8027 48.0135 54.6054 48.5247 56.3543C46.7623 56.7848 44.9058 57.148 42.9821 57.4305C43.6413 56.3946 44.3005 55.3318 44.9193 54.2422C45.5381 53.1659 46.1166 52.0762 46.6682 51ZM33.0269 65.3543C31.7758 64.0628 30.5247 62.6233 29.287 61.0493C30.4978 61.1031 31.7354 61.1435 32.9865 61.1435C34.2511 61.1435 35.5022 61.1166 36.7265 61.0493C35.5157 62.6233 34.2646 64.0628 33.0269 65.3543ZM23.0179 57.4305C21.1076 57.148 19.2646 56.7982 17.5022 56.3677C18 54.6323 18.6188 52.8431 19.3184 51.0538C19.87 52.1301 20.4484 53.2063 21.0807 54.2825C21.713 55.3587 22.3587 56.4081 23.0179 57.4305ZM32.9596 29.435C34.2108 30.7265 35.4619 32.1659 36.6996 33.7399C35.4888 33.6861 34.2511 33.6457 33 33.6457C31.7354 33.6457 30.4843 33.6726 29.2601 33.7399C30.4709 32.1659 31.722 30.7265 32.9596 29.435ZM23.0045 37.3587C22.3453 38.3946 21.6861 39.4574 21.0673 40.5471C20.4484 41.6233 19.87 42.6996 19.3184 43.7758C18.5919 41.9731 17.9731 40.1704 17.4619 38.4215C19.2242 38.0045 21.0807 37.6413 23.0045 37.3587ZM10.8296 54.2018C6.06727 52.1704 2.98655 49.5067 2.98655 47.3946C2.98655 45.2825 6.06727 42.6054 10.8296 40.5874C11.9866 40.0897 13.2511 39.6457 14.5561 39.2287C15.3229 41.8655 16.3318 44.6099 17.583 47.4215C16.3453 50.2197 15.3498 52.9507 14.5964 55.574C13.2646 55.157 12 54.6996 10.8296 54.2018ZM18.0673 73.426C16.2377 72.3767 15.4439 68.3812 16.0628 63.2422C16.2108 61.9776 16.4529 60.6457 16.7489 59.287C19.3857 59.9327 22.2646 60.4305 25.2915 60.7534C27.1076 63.2422 28.991 65.5022 30.8879 67.4798C26.5022 71.5561 22.3857 73.7892 19.5874 73.7892C18.9821 73.7758 18.4709 73.6547 18.0673 73.426ZM49.9776 63.1749C50.6099 68.3139 49.8296 72.3094 48.0135 73.3722C47.6099 73.6144 47.0852 73.722 46.4664 73.722C43.6816 73.722 39.5516 71.5022 35.1659 67.4529C37.0493 65.4753 38.9327 63.2287 40.722 60.7399C43.7623 60.417 46.6413 59.9193 49.278 59.2601C49.5874 60.6188 49.8296 61.9238 49.9776 63.1749ZM55.157 54.2018C54 54.6996 52.7354 55.1435 51.4305 55.5605C50.6637 52.9238 49.6547 50.1794 48.4036 47.3677C49.6413 44.5695 50.6368 41.8386 51.3901 39.2152C52.722 39.6323 53.9865 40.0897 55.1704 40.5874C59.9327 42.6188 63.0135 45.2825 63.0135 47.3946C63 49.5067 59.9193 52.1839 55.157 54.2018Z"
                style={{ fill: "var(--primary-color)" }}
              />
              <path
                d="M32.9866 53.5425C36.382 53.5425 39.1346 50.79 39.1346 47.3946C39.1346 43.9991 36.382 41.2466 32.9866 41.2466C29.5912 41.2466 26.8386 43.9991 26.8386 47.3946C26.8386 50.79 29.5912 53.5425 32.9866 53.5425Z"
                style={{ fill: "var(--primary-color)" }}
              />
              <path
                d="M130.12 24.737H159.669V27.0731H132.829V44.6552H158.069V46.9913H132.829V66.2946H159.977V68.6307H130.12V24.737ZM162.316 24.737H165.456L179.368 44.0404L193.588 24.737L212.93 0.217285L181.153 46.0691L197.528 68.6307H194.266L179.368 48.0978L164.409 68.6307H161.208L177.706 46.0691L162.316 24.737ZM198.698 27.0731V24.737H232.371V27.0731H216.858V68.6307H214.149V27.0731H198.698Z"
                style={{ fill: "var(--primary-color)" }}
              />
              <path d="M93.1539 24.7371H96.5397L143.228 94.2297L123.934 68.6308L95.9857 28.0568L95.8626 68.6308H93.1539V24.7371Z" style={{ fill: "var(--primary-color)" }} />
              <path
                d="M232.098 65.5897C232.658 65.5897 233.066 65.1632 233.066 64.6121C233.066 64.0609 232.658 63.6344 232.098 63.6344C231.545 63.6344 231.13 64.0609 231.13 64.6121C231.13 65.1632 231.545 65.5897 232.098 65.5897ZM234.759 63.0176C234.759 64.6449 235.939 65.7078 237.658 65.7078C239.49 65.7078 240.596 64.6121 240.596 62.7092V56.0099H239.121V62.7027C239.121 63.7591 238.587 64.3234 237.645 64.3234C236.802 64.3234 236.229 63.7984 236.209 63.0176H234.759ZM242.527 62.9323C242.632 64.6252 244.049 65.7078 246.157 65.7078C248.41 65.7078 249.82 64.5727 249.82 62.7617C249.82 61.3379 249.016 60.5505 247.066 60.0977L246.018 59.8418C244.78 59.5531 244.279 59.166 244.279 58.4902C244.279 57.6372 245.057 57.0794 246.223 57.0794C247.329 57.0794 248.094 57.6241 248.232 58.4967H249.668C249.582 56.9023 248.173 55.7803 246.242 55.7803C244.167 55.7803 242.784 56.9023 242.784 58.5886C242.784 59.9796 243.568 60.8064 245.287 61.2066L246.512 61.5019C247.771 61.7972 248.324 62.2302 248.324 62.952C248.324 63.7919 247.455 64.4021 246.269 64.4021C244.997 64.4021 244.114 63.8312 243.989 62.9323H242.527Z"
                style={{ fill: "var(--primary-color)" }}
              />
            </svg>
          </Flex>
          <ScrollDown />
          <DotsStripe right hideOnMobile />
        </Section>
        <Section width="2093px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 77 }}>{t("react:projectsTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <Project>
                <SelfServiceTotemSvg />
                <ProjectDescription>
                  <Title medium style={{ marginRight: 15, marginBottom: 20, maxWidth: 280 }}>
                    {t("react:projectsTotemTitle")}
                  </Title>
                  <Text style={{ marginRight: 15, marginBottom: 33 }}>{t("react:projectsTotemDescription")}</Text>
                  <Link href="/projects/react/selfservicetotem" passHref>
                    <Button filled>{t("react:projectsTotemButton")}</Button>
                  </Link>
                </ProjectDescription>
              </Project>
              <Project last>
                <TelemedicineCabinSvg />
                <ProjectDescription>
                  <Title medium style={{ marginRight: 15, marginBottom: 20, maxWidth: 280 }}>
                    {t("react:projectsCabinTitle")}
                  </Title>
                  <Text style={{ marginRight: 15, marginBottom: 33 }}>{t("react:projectsCabinDescription")}</Text>
                  <Link href="/projects/react/telemedicinecabin" passHref>
                    <Button filled>{t("react:projectsCabinButton")}</Button>
                  </Link>
                </ProjectDescription>
              </Project>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1013px">
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <CheckOutLink primaryColor href="/projects/reactnative">
              {t("react:checkOutReactNativeProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default ReactProjects;
