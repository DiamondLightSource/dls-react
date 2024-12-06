import { Meta, StoryObj } from "@storybook/react/*";
import { Footer, FooterLink, FooterLinks } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "SciReactUI/Navigation/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoOnly: Story = {
  args: {},
};

export const CopyrightOnly: Story = {
  args: {
    logo: "",
    copyright: "Copyright © text",
  },
};

export const CopyrightAndLogo: Story = {
  args: { copyright: "Copyright © text" },
};

export const WithOneLink: Story = {
  args: {
    copyright: "Copyright © text",
    children: [
      <FooterLinks key="footer-links">
        <FooterLink href="#" key="first-footer-link">
          Link one
        </FooterLink>
      </FooterLinks>,
    ],
  },
};

export const WithTwoLinks: Story = {
  args: {
    copyright: "Copyright © text",
    children: [
      <FooterLinks key="footer-links">
        <FooterLink href="#" key="first-footer-link">
          Link one
        </FooterLink>
        <FooterLink href="#" key="second-footer-link">
          Link two
        </FooterLink>
      </FooterLinks>,
    ],
  },
};

export const WithThreeLinks: Story = {
  args: {
    copyright: "Copyright © text",
    children: [
      <FooterLinks key="footer-links">
        <FooterLink href="#" key="first-footer-link">
          Link one
        </FooterLink>
        <FooterLink href="#" key="second-footer-link">
          Link two
        </FooterLink>
        <FooterLink href="#" key="third-footer-link">
          Link three
        </FooterLink>
      </FooterLinks>,
    ],
  },
};
