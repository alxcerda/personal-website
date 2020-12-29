import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div>
      <div className="footer py-5 border border-t-accent-light flex flex-col justiy-center items-center">
        <div className="text-accent-medium">© Alex Cerda 2020</div>
        <div className="flex justify-center items-center h-full">
          <a
            href="https://www.linkedin.com/in/alexandra-cerda-uk/"
            className="px-2"
          >
            <LinkedInIcon className="text-accent-medium" />
          </a>
          <a href="https://github.com/alxcerda" className="px-2">
            <GitHubIcon className="github-icon text-accent-medium" />
          </a>
          <a href="https://twitter.com/alxcerda_" className="px-2">
            <TwitterIcon className="text-accent-medium" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
