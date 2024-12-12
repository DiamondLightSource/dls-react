import { Meta, StoryObj } from "@storybook/react/*";
import { Footer, FooterLink, FooterLinks } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "SciReactUI/Navigation/Footer",
  component: Footer,
  decorators: [(Story) => <Story />],
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
    copyright: "add text here",
  },
};

export const CopyrightAndLogo: Story = {
  args: { copyright: "add text here" },
};

export const WithOneLink: Story = {
  args: {
    copyright: "add text here",
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
    copyright: "add text here",
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
