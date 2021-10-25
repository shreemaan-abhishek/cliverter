class Cliverter < Formula
    desc "Converter app at the comfort of your command line"
    homepage "https://github.com/shreemaan-abhishek"
    url "https://github.com/shreemaan-abhishek/cliverter/releases/download/v0.1.0/cliverter.tar.gz"
    sha256 "0d520f952667379f3f30649ae8b46c40d4345ce74ffb174cbfad87e188330746"
    license "MIT"
    version "0.1.0"
  
    def install
      bin.install "cliverter"
    end
  end