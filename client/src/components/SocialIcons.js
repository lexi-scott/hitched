const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/lexi-scott">
        <i className="fa-brands fa-github" aria-hidden="true" title="Lexi Scott's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/lexi-scott-04a50423/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Lexi Scott's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/slexicon/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Lexi Scott's Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
