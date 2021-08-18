import React from "react";
import tw from "tailwind-styled-components";
import Header from "../../components/home/Header";
import { DirectionContainer, DirectionItem } from "../search";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Footer from "../../components/home/Footer";

const TermContainer = tw.div`
bg-secondary
    h-max
`;

const TermHeaderContainer = tw.div`
    bg-black
    mt-6
    py-3

    md:py-4

    lg:py-5


    xl:py-7
`;

const TermContentContainer = tw.div`
    px-4
    mt-8

    md:px-8
    lg:px-12

    xl:px-36
`;

const TermContentLabel = tw.h3`
    text-lg
    text-white
    font-bold

    xl:text-2xl
`;

const TermUpdateText = tw.h3`
    text-xs
    text-gray-400
    mt-2

    xl:text-sm
`;

const TermBodyContainer = tw.div`
    text-gray-500
    px-4
    text-sm
    py-6

    md:px-8

    lg:px-12
    

    xl:px-36
    xl:py-8
`;

const Term = () => {
  return (
    <>
      <TermContainer>
        <Header />
        <TermHeaderContainer>
          <DirectionContainer className="mt-0">
            <DirectionItem>Trang chủ</DirectionItem>
            <ChevronRightIcon className="h-3 xl:h-4 text-gray-100 font-semibold mx-3.5" />
            <DirectionItem>Điều khoản sử dụng</DirectionItem>
          </DirectionContainer>
          <TermContentContainer>
            <TermContentLabel>Điều khoản sử dụng</TermContentLabel>
            <TermUpdateText>
              Cập nhật lần cuối: 14 tháng 10 năm 2021
            </TermUpdateText>
          </TermContentContainer>
        </TermHeaderContainer>
        <TermBodyContainer>
          <p>
            Welcome, and thank you for your interest in Cloudary Holdings
            Limited, operating the Webnovel service (“Webnovel,” “we,” or “us”)
            and our websites at www.webnovel.com, along with other related
            websites, networks, applications, and other services provided by us
            (collectively, our “Service”). These Terms of Service are a legally
            binding contract between you and Webnovel regarding your use of the
            Service.
          </p>
          <br></br>
          <p>
            PLEASE READ THE FOLLOWING TERMS CAREFULLY. BY CLICKING “I ACCEPT,”
            OR BY DOWNLOADING, INSTALLING, OR OTHERWISE ACCESSING OR USING THE
            SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE
            TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS, INCLUDING THE
            WEBNOVEL PRIVACY POLICY (TOGETHER, THE “TERMS”). If you are not
            eligible, or do not agree to the Terms, then you do not have our
            permission to use the Service.
          </p>
          <br></br>
          <p>
            These Terms provide that all disputes between you and Webnovel will
            be resolved by BINDING ARBITRATION. YOU AGREE TO GIVE UP YOUR RIGHT
            TO GO TO COURT to assert or defend your rights under this contract,
            except for matters that may be taken to small claims court. Your
            rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or
            jury, and your claims cannot be brought as a class action. Please
            review Section 20 (Dispute Resolution and Arbitration) for the
            details regarding your agreement to arbitrate any disputes with
            Webnovel.
          </p>
          <br></br>
          <p>
            1.Webnovel Service Overview. Webnovel operates and maintains an
            online literature platform which provides online reading services,
            literature content generation services, and comics content
            distribution services.
          </p>
          <br></br>
          <p>
            2.Eligibility. You must be at least 13 years of age to use the
            Service. By agreeing to these Terms, you represent and warrant to us
            that: (a) you are at least 13 years of age; (b) you have not
            previously been suspended or removed from the Service; and (c) your
            registration and your use of the Service is in compliance with all
            applicable laws and regulations. If you are using the Service on
            behalf of an entity, organization, or company, you represent and
            warrant that you have the authority to bind that organization to
            these Terms and you agree to be bound by these Terms on behalf of
            that organization.
          </p>
          <br></br>
          <p>
            3.Accounts and Registration. To access most features of the Service,
            you must register for an account. When you register for an account,
            you may be required to provide us with some information about
            yourself, such as your email address or other contact information.
            You agree that the information you provide to us is accurate and
            that you will keep it accurate and up-to-date at all times. When you
            register, you will be asked to provide a password. You are solely
            responsible for maintaining the confidentiality of your account and
            password, and you accept responsibility for all activities that
            occur under your account. If you have reason to believe that your
            account is no longer secure, then you must immediately notify us at
            service@webnovel.com.
          </p>
          <br></br>
          <p>
            4.Payment Terms. Access to the Service, or to certain features of
            the Service, may require you to pay fees. Before you pay any fees,
            you will have an opportunity to review and accept the fees that you
            will be charged. All fees are in U.S. dollars and are
            non-refundable.
          </p>
          <br></br>
          <p>
            4.1Price. Webnovel reserves the right to determine pricing for the
            Service. Webnovel will make reasonable efforts to keep pricing
            information published on the website up to date. We encourage you to
            check our website periodically for current pricing information.
            Webnovel may change the fees for any feature of the Service,
            including additional fees or charges, if Webnovel gives you advance
            notice of changes before they apply. Webnovel, at its sole
            discretion, may make promotional offers with different features and
            different pricing to any of Webnovel’s customers. These promotional
            offers, unless made to you, will not apply to your offer or these
            Terms.
          </p>
          <br></br>
          <p>
            4.2Authorization. Webnovel will charge the payment method you
            specify at the time of purchase. You authorize Webnovel to charge to
            that payment method all sums for orders that you make and any level
            of Service you select as described in these Terms or published by
            the Company. If you pay any fees with a credit card, Webnovel may
            seek pre-authorization of your credit card account prior to your
            purchase to verify that the credit card is valid and has the
            necessary funds or credit available to cover your purchase. Payment
            processing services are provided by the third-party service through
            which the purchase is made (e.g., Apple In-App Purchases, Google
            Play, PayPay).
          </p>
          <br></br>
          <p>4.3Subscriptions.</p>
          <br></br>
          <p>
            a.Subscription and Auto-Renewals.The Service may allow you to
            subscribe to a plan (“Subscription Plan”) for which you will be
            periodically billed the amounts indicated to you at the time of your
            subscription, as may be updated from time to time by Webnovel, on a
            forward-going basis, upon notice to you (the “Subscription Fee”).
            When you subscribe to a Subscription Plan, the Subscription Plan
            will be billed on a periodic basis. You hereby authorize Webnovel to
            charge you on a going-forward basis and until cancellation of either
            the Subscription Plan or your account. The “Subscription Billing
            Date” is the day of the month when you sign up to your Subscription
            Plan. Your account will be charged automatically on the Subscription
            Billing Date all applicable fees and taxes for the next subscription
            period. BY PURCHASING A SUBSCRIPTION, YOU AGREE THAT YOUR
            SUBSCRIPTION WILL AUTOMATICALLY RENEW FOR SUCCESSIVE PERIODS UNLESS
            YOU CANCEL YOUR SUBSCRIPTION OR ACCOUNT AS FURTHER DESCRIBED BELOW.
          </p>
          <br></br>
          <p>
            b.Refunds; Cancellation. YOU MAY CANCEL YOUR SUBSCRIPTION PLAN AT
            ANY TIME, IN WHICH CASE YOUR SUBSCRIPTION WILL EXPIRE AT THE END OF
            THAT SUBSCRIPTION PERIOD (AND UPON WHICH EXPIRATION YOUR SUBCRIPTION
            WILL NO LONGER BE RENEWED OR CHARGED). You must cancel your
            Subscription Plan before it renews in order to avoid billing of the
            next periodic Subscription Fee to your account. We will bill the
            periodic Subscription Fee to the payment method you provide to us
            during registration (or to a different payment method if you change
            your payment information). You may cancel your Subscription Plan
            [(i)For Apple phones, users can go to Settings-Itunes and App Store.
            Click Apple ID and choose Apple ID. They can enter their User
            Settings page to click, Subscription. Choose Webnovel to cancel the
            subscription. (ii)For Android Phones, users can go to the
            corresponding Google Play store choice to cancel the subscription.
          </p>
          <br></br>
          <p>
            4.4Delinquent Accounts. Webnovel may suspend or terminate access to
            the Service, including fee-based portions of the Service, for any
            account for which any amount is due but unpaid. In addition to the
            amount due for the Service, a delinquent account will be charged
            with fees or charges that are incidental to any chargeback or
            collection of any the unpaid amount, including collection fees.
          </p>
          <br></br>
          <p>5.Licenses</p>
        </TermBodyContainer>
      </TermContainer>
      <Footer />
    </>
  );
};

export default Term;
